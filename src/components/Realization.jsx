import React from 'react'

const Realization = () => {
  return (
    <>
    <h1 className='fnsz36 extraBold accentColor realization__h1' style={{marginTop: 97, textAlign: 'center'}}>Процесс реализации заказа</h1>
    <div className='realization__row mt26'>

        <div className="realization__card realization__card-1">
            <p className='bold fnsz36 textAlCenter' style={{marginTop: 54}}>1</p>
            <p className='bold fnsz14 accentColor textAlCenter' style={{marginTop: 8}}>Утверждаем заказ</p>
            <p className='light fnsz14 realization__desc'>Получим заказ и перезваниваем вам для уточнения деталей заказа</p>
        </div>

        <div className="realization__card realization__card-2">
            <p className='bold fnsz36 textAlCenter' style={{marginTop: 54}}>2</p>
            <p className='bold fnsz14 accentColor textAlCenter' style={{marginTop: 8}}>Готовим маффины</p>
            <p className='light fnsz14 realization__desc' style={{paddingLeft: 10, paddingRight: 10}}>Готовим вкусные маффины по выбранному вами рецепту</p>
        </div>

        <div className="realization__card realization__card-3">
            <p className='bold fnsz36 textAlCenter' style={{marginTop: 54}}>3</p>
            <p className='bold fnsz14 accentColor textAlCenter' style={{marginTop: 8}}>Отправляем</p>
            <p className='light fnsz14 realization__desc'>Отправляем вам заказ курьером</p>
        </div>

        <div className="realization__card realization__card-4">
            <p className='bold fnsz36 textAlCenter' style={{marginTop: 54}}>4</p>
            <p className='bold fnsz14 accentColor textAlCenter' style={{marginTop: 8}}>Получение заказов</p>
            <p className='light fnsz14 realization__desc'>После звонка курьера вы получите свой заказ</p>
        </div>

    </div>
    </>
  )
}

export default Realization