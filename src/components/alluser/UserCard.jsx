import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//  The Properties (Props) are coming from AllUser Components 
const UserCard = ({ username, userName, address, email, phone, website, company }) => {
    let { street, city, zipcode } = address;
    let { name, bs, catchPhrase } = company
    return (
        <Card className="text-center border border-primary mb-4">
            <div>
                <div className='mb-4'>
                    <h1>Name:  {username} {userName}</h1>
                    <p className='my-0'>Phone: {phone}</p>
                    <p className='mb-2'>Email: {email} </p>
                    <a href={website} ><Button variant="primary">website</Button></a>
                </div>
                <p className='mb-0'><span className='fw-bold'>Company Name:</span> {name}</p>
                <p className='my-0'><span className='fw-bold'>Company BS:</span> {bs}</p>
                <p><span className='fw-bold'>Company Pharse:</span> {catchPhrase}</p>
                <hr />
                <h2>Address</h2>
                <p className='mb-0'><span className='fw-bold'>Street:</span> {street}</p>
                <p className='mb-0'><span className='fw-bold'>city:</span> {city}    <span className='fw-bold'>Zip-code:</span> {zipcode}</p>

            </div>
        </Card>
    );
};

export default UserCard;