import { useState } from 'react';
import propertiesData from '../data/property_data.json';
import RealEstateCard from './card';
import Inquiry from './inquiry';
import CenteredModal from './modal';

const Property = () => {
  const [props, setProps] = useState(propertiesData);
  const [searchInp, setSearchInp] = useState('');

  function handleSearchChange(e) {
    setSearchInp(e.target.value);
    let filteredProps = props.filter((prop) => {
      if (prop.property_type.toLowerCase().includes(searchInp.toLowerCase()) || prop.location.toLowerCase().includes(searchInp.toLowerCase())) return prop;
    })
    console.log(filteredProps);
    // let filteredProps = props.filter((book) => {
    //   if (book.title.toLowerCase().includes(searchInp.toLowerCase())) return book;
    // })
    // console.log(filteredProps);
    if (e.target.value == '') setProps(propertiesData);
    else setProps(filteredProps);
  }


  return <>
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow px-5 fixed-top bg-light ">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbqmzgbLYOwN6QdUn9NbCrcsOO5CzxUPQaw&usqp=CAU" style={{ width: '3.5rem', borderRadius: '50%' }} />
        <h1 className="fs-4">Real Estate</h1>
      </a>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex align-items-center">
        <input type="search" className="form-control form-control-dark" placeholder="Search Properties..." aria-label="Search" onChange={handleSearchChange} />
      </form>
    </header>

    <div className="d-flex flex-wrap mt-6 justify-content-center ">
        {props.map((property, index) => (
          <RealEstateCard key={index} property={property} />
        ))}
      </div>

      <hr />

      <Inquiry />

  </>
}

export default Property;