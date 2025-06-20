import { MailService } from '@sendgrid/mail';
import type { InsertContactSubmission } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set. Email functionality will be disabled.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', params);
    return true; // Return true for development without API key
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(
  contactData: InsertContactSubmission,
  recipientEmail: string
): Promise<boolean> {
  const subject = `Nueva consulta legal - ${contactData.servicio || 'Consulta General'}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a8a; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
        Nueva Consulta Legal - RegulaPyme Consulting
      </h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a8a; margin-top: 0;">Información del Cliente</h3>
        <p><strong>Nombre:</strong> ${contactData.nombre}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Teléfono:</strong> ${contactData.telefono}</p>
        ${contactData.empresa ? `<p><strong>Empresa:</strong> ${contactData.empresa}</p>` : ''}
      </div>
      
      <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #ea580c; margin-top: 0;">Detalles de la Consulta</h3>
        <p><strong>Servicio de Interés:</strong> ${contactData.servicio || 'No especificado'}</p>
        ${contactData.mensaje ? `
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: white; padding: 15px; border-left: 4px solid #f97316; margin: 10px 0;">
            ${contactData.mensaje}
          </p>
        ` : ''}
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          Este email fue enviado desde el formulario de contacto de RegulaPyme Consulting
        </p>
      </div>
    </div>
  `;

  const text = `
    Nueva Consulta Legal - RegulaPyme Consulting
    
    Información del Cliente:
    Nombre: ${contactData.nombre}
    Email: ${contactData.email}
    Teléfono: ${contactData.telefono}
    ${contactData.empresa ? `Empresa: ${contactData.empresa}` : ''}
    
    Detalles de la Consulta:
    Servicio de Interés: ${contactData.servicio || 'No especificado'}
    ${contactData.mensaje ? `Mensaje: ${contactData.mensaje}` : ''}
  `;

  return await sendEmail({
    to: recipientEmail,
    from: 'contacto@regulapymeconsulting.cl', // You'll need to verify this domain with SendGrid
    subject,
    text,
    html,
  });
}