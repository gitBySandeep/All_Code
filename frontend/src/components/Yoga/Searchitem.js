// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Yoga from '../Yoga/Yoga'

// // import Product from './Product';

// const SearchItem = (props) => {
//   window.alert("hi sandeep")
//   const {term} = useParams();
//   const [filterData, setFilterData] = useState([]);
  
// //   const { state } = useLocation();
//   useEffect(() => {
//     const filteredData = () =>{
//       console.log(props);
//       const data = props.filter((p)=>p.yogaName.toLowerCase().includes(term.toLowerCase()));
//     //   console.log(data)
//       setFilterData(data)
//     }
//     filteredData();
//   }, [term])
  
//   return <>
// <Yoga Yoga={filterData}/>
//   </>
// }

// export default SearchItem;