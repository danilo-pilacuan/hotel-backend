import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configurar el transporte de correo
    this.transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: 'lascascadashotel@outlook.com', // Tu dirección de correo
        pass: 'L@sC4scadas', // Tu contraseña
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      const mailOptions = {
        from: 'lascascadashotel@outlook.com',
        to,
        subject,
        text,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('Correo enviado correctamente.');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw error;
    }
  }
}