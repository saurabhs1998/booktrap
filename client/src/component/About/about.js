import React from 'react'
import './about.css';
import Footer from '../Footer/footer';
import HeadingTitle from '../HeadingTitle/headingTitle';
import FAQ from '../FAQ/faq';

export default function about() {
    return (
        <div>
        <div className="aboutpage">
          <HeadingTitle title="About Me"></HeadingTitle>
          <br></br>
          <div>
             <p>I am React Developer who likes to build cool websites
             <br></br>
             and spend most of my time around web. Sometime just for fun and sometime haha.
             </p>
          </div>
          <div>
            <img src={require('../../image/open-peeps.png')}/>
          </div>
        </div>
        <div className="bookabout">
          <HeadingTitle title="Inspiration" margin="400px 0px 20px 0px"></HeadingTitle>
          <p>I always found it tough to search for books that i should read next <br></br> 
          based on review and rating of books so, i created this website to solve this problem.</p>
          </div>
          <div >
            <HeadingTitle title="FAQ" ></HeadingTitle>
            <div style={{display:"block",margin:"5% 10%",}}>
            
            <FAQ question="Who is this for?" answer="This is for all the people who loves to read books and wanted to share their journey with the books they have read so far."></FAQ>
            <FAQ question="How to create a book collection?" color="info" answer="To create a book collection you need to get logged in first then click on the dashboard"></FAQ>
            <FAQ question="Whom to contact for any query?" color="warning" answer="You can drop a mail at manishkumar199222@gmail.com "/>
            <FAQ question="Can i contribute to this project?" color="primary" answer="Yes, you can contribute to this page.Drop a mail at manishkumar199222@gmail.com and i will get back to you"/>
            </div>
           
          </div>
    <Footer></Footer>
        </div>
    )
}
