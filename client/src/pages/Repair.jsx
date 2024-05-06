import Banner from "../components/Banner"
import Advantages from "../components/Advantages"
import Form from "../components/Form"
import '../styles/repair.css'
import BannerIMG from "../assets/repair/banner_repair.jpg"


function Repair() {
  return (
    <div className="Repair">
      <div className='container'>
        <h1 className="page_title">Ремонт</h1>
      </div>
      <Banner 
        img = {{ path: BannerIMG}}
        description = "Выездной ремонтный сервис"
        body = "Для ремонта и обслуживания на территории заказчика"
         />
      <Advantages />
      <div className="container">
        <section className="repair-info">
          <p>
          Сервисная служба ООО «ТЕХСНАБИНВЕСТ» осуществляет услуги сервиса, как в собственном сервисном центре так и на площадках эксплуатации техники наших клиентов. Для этого в распоряжении имеется парк собственных сервисных автомобилей и команда выездных сервисных бригад. В зависимости от выполняемых работ, сервисные автомобили оснащены всем необходимым оборудованием, что позволяет осуществлять весь спектр сервисных услуг: <strong>от планового посещения (осмотра), до проведения среднего ремонта на территории Заказчика.</strong>
          </p>
          <p>
          Для получения корректной стоимости необходимой для Вас услуги, Вам достаточно заполнить <strong>форму заявки</strong> и отправить нам. После получения заявки наши сервисные менеджеры обязательно свяжутся с Вами для подтверждения информации.
          </p>

        </section>
      </div>
      <div className="bgd-highlight">
          <div className="container">
            <section className="repair-request">
              <Form isModal={false}/>
            </section>
          </div>
        </div>
    </div>
  );
}

export default Repair;