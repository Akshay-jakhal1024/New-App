import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <>
                <footer className="text-center text-lg-start bg-dark text-muted ">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-light">
                                        <i className="fas fa-gem me-3"></i>News App
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{textDecoration:"none"}}>
                                    <h6 className="text-uppercase fw-bold mb-4 text-light ">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Laravel</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-light ">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset" style={{textDecoration:"none"}}>Help</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-light ">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        info@example.com
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.25)"}}>
                        © 2021 Copyright :
                        <a className="text-reset fw-bold" href="/"> NewsApp.com</a>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
