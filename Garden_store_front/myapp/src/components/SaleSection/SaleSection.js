import React, { useEffect } from 'react'
import s from './SaleSection.module.css'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetProductList } from '../../asyncAction/products'
import ProductItem from '../UI/ProductItem/ProductItem'



const SaleSection = forwardRef((props, ref) => {

  const dispatch = useDispatch()

  useEffect (()=>{
    dispatch(fetchGetProductList())
  }, [])

  const productsAll = useSelector(store => store.products)
  // console.log('All_products',productsAll);

  const discount_products = productsAll.filter(el => el.discont_price)
  // console.log('discount_products-------' , discount_products);


  const sale_products = discount_products.sort(() => Math.random() - 0.5).slice(0,3)


  // console.log('sale_products', sale_products);

  return (
        <div ref={ref} className={s.wrapper}>
          <div className={s.section_title}>
            <h2>Sale</h2>
          </div>
          <div className={s.sections_sale_products}>
            {
              sale_products.map(el => <ProductItem style_item={'product_item'} key={el.id} {...el}/>)
            }
            </div>
        </div>
      )
})

export default SaleSection

