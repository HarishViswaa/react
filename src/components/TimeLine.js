import React, { useState, useEffect } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const TimeLine = () => {
    return (
        <div>
            <div class="timeline">
                <div class="timeline-column">
                    <h3>Items</h3>
                    <div class="timeline-item completed">
                        <span>SD-13</span>
                        <p>Locate Our Store Page Design</p>
                        <i></i>
                    </div>
                    <div class="timeline-item completed">
                        <span>SD-9</span>
                        <p>Add to Cart Page Design</p>
                        <i></i>
                    </div>
                    <div class="timeline-item completed">
                        <span>SD-50</span>
                        <p>Database Architecture</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-64</span>
                        <p>User Review Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-63</span>
                        <p>Coupon / Offers Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-62</span>
                        <p>Wishlist Category Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-61</span>
                        <p>Wishlist Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-60</span>
                        <p>Order Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-59</span>
                        <p>Product Image Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-58</span>
                        <p>Product Category Table</p>
                        <i></i>
                    </div>
                    <div class="timeline-item">
                        <span>SD-57</span>
                        <p>Store Table</p>
                        <i></i>
                    </div>
                    <button>+ Create</button>
                </div>
                <div class="timeline-column">
                    <h3>FEB</h3>
                    <div class="timeline-item completed">
                        <span>MP</span>
                        <p></p>
                        <i></i>
                    </div>
                </div>
                <div class="timeline-column">
                    <h3>MAR</h3>
                    <div class="timeline-item completed">
                        <span>JP</span>
                        <p></p>
                        <i></i>
                    </div>
                </div>
                <div class="timeline-column">
                    <h3>APR</h3>
                    <div class="timeline-item completed">
                        <span>MP</span>
                        <p></p>
                        <i></i>
                    </div>
                    <div class="timeline-item completed">
                        <span>MP</span>
                        <p></p>
                        <i></i>
                    </div>
                </div>
                <div class="timeline-column">
                    <h3>MAY</h3>
                    <div class="timeline-item completed">
                        <span>DP</span>
                        <p></p>
                        <i></i>
                    </div>
                    <div class="timeline-item blocked">
                        <span>HP</span>
                        <p></p>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TimeLine;