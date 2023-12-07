import React, { useState } from 'react';
import { categories } from '../data/categories';
import { Card, CardBody, CardHeader, FormCheck } from 'react-bootstrap';
import moment from 'moment/moment';

export default function SideFilter(props) {
  let [selectedCategory, setSelectedCategory] = useState(0);
  let [selectedPrice, setSelectedPrice] = useState(null);
  let [selectedDate1, setSelectedDate1] = useState(moment().format());
  let [selectedDate2, setSelectedDate2] = useState(null);

  function onFilter() {
    props.handleFilter(selectedCategory, selectedPrice, {min:selectedDate1, max:selectedDate2})
  }

  return (
    <aside className={props.display}>
      <button className='btn d-lg-none d-block mb-3' onClick={props.closeFilter}>Filtreyi Kapat</button>
      <Card>
        <CardHeader>
          Kategoriler
        </CardHeader>
        <CardBody>
          {categories.map(category => 
            <FormCheck key={category.id} name='category' onChange={(e) => setSelectedCategory(e.target.value)} type='radio' value={category.id} label={category.name} />)}
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Fiyat
        </CardHeader>
        <CardBody>
          <FormCheck type='radio' name='price' label="Bedava" value={{ min: 0, max: 0 }} onChange={(e) => setSelectedPrice(e.target.value)} />
          <FormCheck type='radio' name='price' label="50 - 200" value={{ min: 50, max: 200 }} onChange={(e) => setSelectedPrice(e.target.value)} />
          <FormCheck type='radio' name='price' label="201 - 350" value={{ min: 201, max: 350 }} onChange={(e) => setSelectedPrice(e.target.value)} />
          <FormCheck type='radio' name='price' label="more than 350" value={{ min: 351, max: 999 }} onChange={(e) => setSelectedPrice(e.target.value)} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Tarih
        </CardHeader>
        <CardBody>
          <input type="date" className='form-control mb-2' onChange={(e) => setSelectedDate1(e.target.value)} />
          <input type="date" className='form-control' onChange={(e) => setSelectedDate2(e.target.value)} />
        </CardBody>
      </Card>
      <button className='btn w-100' onClick={onFilter}>Filter</button>
    </aside>
  );
};
