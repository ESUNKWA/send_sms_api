import { Body, Controller, Get, Post} from '@nestjs/common';
import { ApismsService } from './apisms.service';
import { TokensService } from 'src/tokens/tokens.service';

@Controller('apisms')
export class ApismsController {
  constructor(private readonly apismsService: ApismsService, private tokenService: TokensService) {}

  @Get('auth')
  public async authentication(){
    return await this.apismsService.authentication();
  }

  @Get('balance')
  public async balance(){
    //Récupération du token en BD
    const token = await this.tokenService.findAll();
    const tokenId = token[0].id;
    const tokenValue = token[0].access_token;

    //Appel API balance
    const data = await this.apismsService.sms_balance({token: tokenValue});

    //Si token valide
    if( data[0].id ){
      return data;
    }

    const newToken: any = await this.apismsService.authentication();
    
    const upd = await this.tokenService.update(tokenId, {access_token: newToken.access_token});

    if( upd.id ){
      //Appel API balance
      const balance = await this.apismsService.sms_balance({token: newToken.access_token});
      return {result: balance};
    }
    return 'nok';
  }

  @Post('send')
  public async send(@Body() body: any){

    //get sms api token
    const token = await this.tokenService.findAll();
    const tokenValue = token[0].access_token;
    return await this.apismsService.sendSmd(body, tokenValue);
  }

}
