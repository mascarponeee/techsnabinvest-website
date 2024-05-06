import Form from "../components/Form"
import Banner from "../components/Banner"
import BannerIMG from "../assets/parts/banner_parts.jpg"
import '../styles/parts.css'

function Parts() {

  const openCatalogInNewTab = async () => {    

    fetch('http://localhost:5000/api/parts/catalog')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке прайс-листа');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      })
      .catch(error => {
        alert('Ошибка при загрузке прайс-листа');
      });
  };

  return (
    <div className="Parts">
      <div className='container'>
        <h1 className="page_title">Запчасти</h1>
      </div>
      <Banner 
        img = {{ path: BannerIMG}}
        description = "Заказ сделать очень просто"
        body = "Просто следуйте инструкции ниже"
         />
      <div className="bgd-highlight">
        <div className="container">
          <section className="parts-info">
            <p>
              Компания предлагает владельцам львовских погрузчиков приобрести оригинальные узлы и детали.
              Помимо идеального состояния, обеспечиваемого КД и условиями производства: соответствие сталей (точное литьё), обработка, к преимуществам покупки наших товаров можно отнести:
            </p>
            <ul>
              <li>высокое качество: мы реализуем только оригинальные узлы и механизмы, произведенные в заводских условиях с соблюдением технологии литья, обработки;</li>
              <li>официальную гарантию на агрегаты, вступающую в действие с момента установки на погрузчик;</li>
              <li>оплату приобретенных товаров в наличной и безналичной форме;</li>
              <li>бесплатные услуги доставки до транспортной компании и бесплатной доставки в пределах Москвы.</li>
            </ul>
            <p>Наши менеджеры помогут подобрать запчасти для автопогрузчиков, в случае затруднений ответят на возникшие вопросы. Позвоните сейчас и узнайте о спецпредложениях и акциях, действующих в данный момент!</p>
            <a href="" onClick={() => 
              openCatalogInNewTab()
            } className='download'  target="_self">Скачать прайс-лист</a>
          </section>
        </div>
      </div>
      <div className="container">
        <section className="parts-instruction">
          <h3 className="title">
            Как заказать запчасть?</h3>
            <div className="steps-flex">
              <div className="step-block">
                <div className="step-number">1</div>
                <div className="step-text">
                Заполните форму. 
                <br></br> 
                Укажите категорию "Запчасти"
                </div>
              </div>
              <div className="step-block">
                <div className="step-number">2</div>
                <div className="step-text">
                  Сфотографируйте  
                  <br></br>
                  шильдик, укажите его
                  <br></br> 
                   в форме</div>
              </div>
              <div className="step-block">
                <div className="step-number">3</div>
                <div className="step-text">Ждите звонка нашего
                <br></br> 
                лучшего менеджера</div>
              </div>
            </div>
          
        </section>
      </div>
      <div className="bgd-highlight">
        <div className="container">
        <section className="parts-request">
              <Form isModal={false}/>
            </section>
        </div>
      </div>
    </div>
    
  );
}

export default Parts;