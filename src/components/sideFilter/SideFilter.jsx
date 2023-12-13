import React, { useState, useEffect, useRef } from 'react';
import { Card, CardBody, CardHeader, FormCheck } from 'react-bootstrap';
import { CATEGORIES, COMING, baseURL } from '../../Api/Api';
import moment from 'moment/moment';
import axios from 'axios';
import "./style.css";

export default function SideFilter(props) {
  const [categories, setCategories] = useState([]);
  const selectedLowerDate = useRef(moment().format());
  const selectedHigherDate = useRef(moment("12-25-2195", "MM-DD-YYYY").format());
  const selectedCategories = useRef([]);
  const selectedPrice = useRef("0~9999");

  const params = {
    selectedPrice: selectedPrice.current,
    selectedLowerDate: selectedLowerDate.current,
    selectedHigherDate: selectedHigherDate.current
  };

  useEffect(() => {
    axios.get(baseURL+CATEGORIES)
      .then((res) => setCategories(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleCheckboxChange = (value) => {
    (selectedCategories.current.includes(value))
      ? selectedCategories.current = selectedCategories.current.filter((v) => v !== value)
      : selectedCategories.current = [...selectedCategories.current, value]
    onFilter()
  }

  const handleLowerDate = (e) => {
    selectedLowerDate.current = e.target.value
    params.selectedLowerDate = selectedLowerDate.current
    onFilter()
  }

  const handleHigherDate = (e) => {
    selectedHigherDate.current = e.target.value
    params.selectedHigherDate = selectedHigherDate.current;
    onFilter();
  }

  const handlePrice = (e) => {
    selectedPrice.current = e.target.value
    params.selectedPrice = selectedPrice.current
    onFilter();
  }

  function onFilter() {
    const categoriesString = selectedCategories.current.toString()
    if (categoriesString === '') {
      axios.get(`${baseURL+COMING}`, { params })
        .then(res => { props.handleFilter(res.data); })
        .catch(err => console.log(err))
    } else {
      axios.get(baseURL+COMING+categoriesString, { params })
        .then(res => { props.handleFilter(res.data); })
        .catch(err => console.log(err))
    }
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
            <FormCheck key={category.id} name='category' onChange={(e) => handleCheckboxChange(e.target.value)} type='checkbox' value={category.id} label={category.name} />)}
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Fiyat
        </CardHeader>
        <CardBody>
          <FormCheck type='radio' name='price' label="Bedava" value='0~0' onChange={(e) => handlePrice(e)} />
          <FormCheck type='radio' name='price' label="1 - 300" value="1~300" onChange={(e) => handlePrice(e)} />
          <FormCheck type='radio' name='price' label="300 - 600" value="300~600" onChange={(e) => handlePrice(e)} />
          <FormCheck type='radio' name='price' label="600 - 900" value="600~900" onChange={(e) => handlePrice(e)} />
          <FormCheck type='radio' name='price' label="more than 900" value="900~9999" onChange={(e) => handlePrice(e)} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Tarih
        </CardHeader>
        <CardBody>
          <input type="date" className='form-control mb-2' onChange={(e) => handleLowerDate(e)} />
          <input type="date" className='form-control' onChange={(e) => handleHigherDate(e)} />
        </CardBody>
      </Card>
    </aside>
  );
};
