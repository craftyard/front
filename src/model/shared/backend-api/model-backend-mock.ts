import { Injectable } from '@angular/core';
import { ServiceResult } from 'rilata/src/app/service/types';
import { ModelAttrs } from 'cy-domain/src/model/domain-data/params';
import { GetingWorkshopModelsServiceParams } from 'cy-domain/src/model/domain-data/model/get-models/s-params';
import { success } from 'rilata/src/common/result/success';

@Injectable({
  providedIn: 'root',
})
export class ModelBackendApiMock {
  async request<SERVICE_PARAMS extends GetingWorkshopModelsServiceParams >(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    const result: ModelAttrs[] = [
      {
        modelId: '1a2b3c4d-5e6f-7g8h-9i10-j11k12l13m14',
        workshopId: 'a1b2c3d4-e5f6-g7h8-i9j10-k11l12m13n14',
        name: 'Модель 1',
        category: 'Игрушки',
        images:[
        'https://ir-3.ozone.ru/s3/multimedia-q/wc1000/6271447442.jpg', 
        'https://ir-3.ozone.ru/s3/multimedia-1-j/wc1000/6915101347.jpg', 
        'https://flash-imperia.ru/wp-content/uploads/2020/05/fleshka-s-metallicheskim-korpusom-sinyaya-min.jpg',
        'https://oe.kz/upload/iblock/202/usb-fleshka-32-gb-transcend-jetflash-370-usb-2-0-belaya-2.jpeg', 
        'https://static.shop.kz/upload/resize_cache/iblock/970/450_450_1/ktc_product_usb_dtkn_32gb_2_zm_lg_min.jpg', ],
      },
      {
        modelId: '2a3b4c5d-6e7f-8g9h-10i11-j12k13l14m15',
        workshopId: 'a1b2c3d4-e5f6-g7h8-i9j10-k11l12m13n14',
        name: 'Модель 2',
        category: 'Кухонная утварь',
        images:[
        'https://ir-3.ozone.ru/s3/multimedia-q/wc1000/6271447442.jpg', 
        'https://ir-3.ozone.ru/s3/multimedia-1-j/wc1000/6915101347.jpg', 
        'https://flash-imperia.ru/wp-content/uploads/2020/05/fleshka-s-metallicheskim-korpusom-sinyaya-min.jpg',
        'https://oe.kz/upload/iblock/202/usb-fleshka-32-gb-transcend-jetflash-370-usb-2-0-belaya-2.jpeg', 
        'https://static.shop.kz/upload/resize_cache/iblock/970/450_450_1/ktc_product_usb_dtkn_32gb_2_zm_lg_min.jpg', ],
      },
      {
        modelId: '3a4b5c6d-7e8f-9g10h-11i12-j13k14l15m16',
        workshopId: 'a1b2c3d4-e5f6-g7h8-i9j10-k11l12m13n14',
        name: 'Модель 3',
        category: 'Мебель',
        images:[
        'https://ir-3.ozone.ru/s3/multimedia-q/wc1000/6271447442.jpg', 
        'https://ir-3.ozone.ru/s3/multimedia-1-j/wc1000/6915101347.jpg', 
        'https://flash-imperia.ru/wp-content/uploads/2020/05/fleshka-s-metallicheskim-korpusom-sinyaya-min.jpg',
        'https://oe.kz/upload/iblock/202/usb-fleshka-32-gb-transcend-jetflash-370-usb-2-0-belaya-2.jpeg', 
        'https://static.shop.kz/upload/resize_cache/iblock/970/450_450_1/ktc_product_usb_dtkn_32gb_2_zm_lg_min.jpg', ],
      },
      {
        modelId: '3c4b5c6d-7e8f-9g10h-11i12-j13k14l15m16',
        workshopId: 'a1b2c3d4-e5f6-g7h8-i9j10-k11l12m13n14',
        name: 'Модель 3',
        category: 'Мебель',
        images:[
        'https://ir-3.ozone.ru/s3/multimedia-q/wc1000/6271447442.jpg', 
        'https://ir-3.ozone.ru/s3/multimedia-1-j/wc1000/6915101347.jpg', 
        'https://flash-imperia.ru/wp-content/uploads/2020/05/fleshka-s-metallicheskim-korpusom-sinyaya-min.jpg',
        'https://oe.kz/upload/iblock/202/usb-fleshka-32-gb-transcend-jetflash-370-usb-2-0-belaya-2.jpeg', 
        'https://static.shop.kz/upload/resize_cache/iblock/970/450_450_1/ktc_product_usb_dtkn_32gb_2_zm_lg_min.jpg', ],
      },
    ];

    return success(result);
  }
}
