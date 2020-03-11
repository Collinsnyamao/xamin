import React from 'react';

const Index = (props) => {
    return (
        <>
            <div class="row algin-self-center footer_top_block">
                <div class="col-md-6">
                    <h4 class="footer-title">Subscribe for Newsletter</h4>			
                </div>
                <div class="col-md-6">
                    <div class="mc4wp-form-fields">
                        <input type="email" name="EMAIL" placeholder="Your Email" required="" />
                        <input type="submit" value="Sign up" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
