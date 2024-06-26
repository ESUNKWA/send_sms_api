import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class SmsService {
    
    constructor( private httpService: HttpService ) {
    }

    public test(): Observable<AxiosResponse<any>>{
        return this.httpService.get('https://jsonplaceholder.typicode.com/posts').pipe(
            map((response: AxiosResponse) => response.data)
          );;
    }

    decodeBase64(): string {
        const buffer = Buffer.from("TlNNMk9kVDBlV2VlV0FUMHViSkc5MjJXR0FKbWxEU3c6NTZHaGNUNmhyZkZMa1RsQw==", 'base64');
        return buffer.toString('utf-8');
      }

      
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
    async sms_balance(data: {token: string}): Promise<AxiosResponse<any>> {
        try {
            const url = 'https://api.orange.com/sms/admin/v1/contracts';
            const auth = 'Bearer ' + data.token;
        
            const headers = {
            Authorization: auth,
            };
            
            const response = await firstValueFrom(
            this.httpService.get(url, { headers }),
            );
        
            return response.data;
        } catch (error) {
            return error.stack;
        }
    }

}
