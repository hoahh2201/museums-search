 import React from 'react';

 const Museumlist = (props) => {
 	const museums = props.museums.map(museum => {
 		return <div className="ui segment"><a>{museum.name}
 		<p>Place: {museum.place}</p>
 		<p>Description: {museum.description}</p>
 		<img src={ 'https://storage.cloud.google.com/museum_tale/' + museum.image} className="ui large image"/></a></div>;
 	});


 	return (<div>{museums}</div>);
 };

 export default Museumlist; 
