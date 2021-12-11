import { Component, OnInit } from '@angular/core';

declare var paypal : any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent{

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
      totalPrice: '50',
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

}
