import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ErrorPageComponent implements OnInit {
  errorText = '';

  error = 404;

  ngOnInit(): void {
    switch (this.error) {
      case 404:
        this.errorText = 'Извините, запрашиваемая страница не найдена. Пожалуйста, убедитесь, что вы используете правильный URL, или вернитесь на главную страницу.';
        break;
      case 403:
        this.errorText = 'Извините, у вас нет доступа к этой странице. Пожалуйста, свяжитесь с администратором для получения необходимых разрешений.';
        break;
      case 500:
        this.errorText = 'Извините, произошла внутренняя ошибка сервера. Мы работаем над устранением проблемы. Пожалуйста, повторите ваш запрос позже.';
        break;
      case 400:
        this.errorText = 'Ваш запрос не может быть обработан из-за ошибки в запросе. Проверьте корректность введенных данных и повторите запрос.';
        break;
      default:
        this.errorText = 'Неизвестная ошибка.';
        break;
    }
  }
}
