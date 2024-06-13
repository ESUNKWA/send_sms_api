import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class ApismsService {

constructor( private httpService: HttpService ){}

  // Authentification à l'API d'envoie d'sms
  async authentication(): Promise<AxiosResponse<any>> {
    const url = 'https://api.orange.com/oauth/v3/token';
    const username = 'NSM2OdT0eWeeWAT0ubJG922WGAJmlDSw';
    const password = '56GhcT6hrfFLkTlC';
    //const auth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    const auth = 'Basic TlNNMk9kVDBlV2VlV0FUMHViSkc5MjJXR0FKbWxEU3c6NTZHaGNUNmhyZkZMa1RsQw==';

    const headers = {
     'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: auth,
    };

    const response = await firstValueFrom(
      this.httpService.post(url, {grant_type:'client_credentials'}, { headers }),
    );



    return response.data;
}

// Authentification à l'API d'envoie d'sms
async sms_balance(data?: {token: string}): Promise<AxiosResponse<any>> {
    try {
        const url = 'https://api.orange.com/sms/admin/v1/contracts';
        const auth = 'Bearer ' + data.token;
      
        const headers = {
          'Content-Type': 'application/json',
          Authorization: auth,
        }; 
        
        const response = await firstValueFrom(
        this.httpService.get(url, { headers }),
        );
    
        return response.data;
    } catch (error) {
        return error.message;
    }
}

async sendSmd(data: {destinataire: string, message: string}, token: string): Promise<any> {
    //Envoie des sms
    const response: any = this.httpService.post('https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B2250000/requests',
      {
        "outboundSMSMessageRequest": {
          "address": "tel:+225" + data.destinataire,
          "senderAddress": "tel:+2250000",
          "senderName": "SMS418760",
          "outboundSMSTextMessage": {
            "message": data.message
          }
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).pipe(
        map((response) => response?.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        })
      );

    return response;
}

}
