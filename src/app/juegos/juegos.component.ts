import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  coachs: any[] = [];
  precio: string = '';

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getCoachs();
  }

  getCoachs(): void
  {
    this.database.getCoachs().subscribe(data => 
      {
        this.coachs = [];
        data.forEach((element: any) => 
        {
          this.coachs.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.coachs);
      });
  }

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: 
    {
      merchantId: '12345678901234567890',
      merchantName: 'Game Couching'
    },
    transactionInfo: 
    {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice:   this.precio,
      currencyCode: 'MXN',
      countryCode: 'MX'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  }

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('Load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
  ) =>{
    console.log('payment authorized', paymentData);
    return {
      transactionState: 'SUCCESS'
    };
  }

  onError = (event: ErrorEvent): void => {
    console.error('error',event.error);
  }

  crearPaymentData(p:string){
    this.paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }
      ],
      merchantInfo: 
      {
        merchantId: '12345678901234567890',
        merchantName: 'Game Couching'
      },
      transactionInfo: 
      {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice:   p,
        currencyCode: 'MXN',
        countryCode: 'MX'
      },
      callbackIntents: ['PAYMENT_AUTHORIZATION']
    }
  }

  eliminarCoach(id: string){
    this.database.deleteCoach(id).then(() => {
      console.log('Empleado eliminado');
    }).catch(error => {
      console.log(error);
      
    })
  }

}
