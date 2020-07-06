import React from 'react';
import './main.styles.scss';
import hotelA from '../../images/hotel-1.jpg';
import hotelB from '../../images/hotel-2.jpg';
import hotelC from '../../images/hotel-3.jpg';
import friendA from '../../images/user-3.jpg';
import friendB from '../../images/user-4.jpg';
import friendC from '../../images/user-5.jpg';
import friendD from '../../images/user-6.jpg';
import user1 from '../../images/user-1.jpg';
import user2 from '../../images/user-2.jpg';



import {ReactComponent as  Star} from '../../images/SVG/star.svg';
import {ReactComponent as  Location} from '../../images/SVG/location-pin.svg';





const Main = () => (
    <main className="hotel-view">
        <div className="gallery">
            <figure className="gallery__item">
                <img src={hotelA} alt="hotel A" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={hotelB} alt="hotel B" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={hotelC} alt="hotel C" className="gallery__photo"/>
            </figure>
        </div>

        <div className="overview">
            <h1 className="overview__heading">
                Lavender Hotel
            </h1>
            <div className="overview__stars">
                <svg className="overview__icon-star">
                       <Star/>
                </svg>
                <svg className="overview__icon-star">
                       <Star/>
                </svg>
                <svg className="overview__icon-star">
                       <Star/>
                </svg>
                <svg className="overview__icon-star">
                       <Star/>
                </svg>
                <svg className="overview__icon-star">
                       <Star/>
                </svg>
            </div>

            <div className="overview__location">
               <svg className="overview__icon-location">
                    <Location/>
                </svg>
                <button className="btn-inline">Taita, Wundanyi</button>
            </div>

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>

        <div className="detail">
           <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>

              <ul className="list">
                  <li className="list__item">Close to the beach</li>
                  <li className="list__item">Breakfast included</li>
                  <li className="list__item">Free airport shuttle</li>
                  <li className="list__item">Free wifi in all rooms</li>
                  <li className="list__item">Air conditioning and heating</li>
                  <li className="list__item">Pets allowed</li>
                  <li className="list__item">We speak all languages</li>
                  <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                  <p className="recommend__count">
                      Sammy and 3 other friends recommends this hotel
                  </p>
                  <div className="recommend__friends">
                      <img src={friendA} alt="Friend 1" className="recommend__photo"/>
                      <img src={friendB} alt="Friend 2" className="recommend__photo"/>
                      <img src={friendC} alt="Friend 3" className="recommend__photo"/>
                      <img src={friendD} alt="Friend 4" className="recommend__photo"/>
                  </div>
              </div>
            </div>

           <div className="user-reviews">
               <figure className="review">
                  <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                  </blockquote>
                  <figcaption className="review__user">
                    <img src={user1} alt="user 1" className="review__photo"/>
                    <div className="review__user-box">
                        <p className="review__user-name">Sammy Smith</p>
                        <p className="review__user-date">July 6, 2020</p>
                    </div>
                    <div className="review__user-rating">7.8</div>
                  </figcaption>
               </figure>

               <figure className="review">
                  <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                  </blockquote>
                  <figcaption className="review__user">
                      <img src={user2} alt="user 2" className="review__photo"/>
                      <div className="review__user-box">
                          <p className="review__user-name">Joy Smith</p>
                          <p className="review__user-date">July 1, 2020</p>
                      </div>
                      <div className="review__user-rating">8.3</div>
                  </figcaption>
               </figure>

               <button className="btn-inline">Show all<span></span>&rarr;</button>
           </div>
        </div>
        <div className="cta">
               <h2 className="cta__book-now">
                   Good news! We have 4 free rooms for your selected dates!
               </h2>
               <button className="btn">
                   <span className="btn__visible">Book Now</span>
                   {/* <span className="btn__invisible">Only 4 rooms left</span> */}
               </button>
           </div> 
    </main>
)

export default Main 