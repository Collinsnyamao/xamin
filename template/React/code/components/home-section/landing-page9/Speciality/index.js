import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <>
                 <section class="pt-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 pr-3">
                                <div class="title-box wow fadeInUp mb-0 text-center text-lg-left border-right ">
                                    <h2>Specializing in</h2>
                                </div>
                            </div>
                            <div class="col-lg-8 align-self-center">
                                <p>There are many variations of passages fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
