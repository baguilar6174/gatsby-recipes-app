import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
    return (
        <Layout>
            <main className='page'>
                <section className='contact-page'>
                    <article className='contact-info'>
                        <h3>Want to get in touch?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, exercitationem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, exercitationem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, exercitationem.</p>
                    </article>
                    <article>
                        <form className='form contact-form'>
                            <div className="form-row">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name='name' id='name'/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name='email' id='email'/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Your message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className='btn block'>Submit</button>
                        </form>
                    </article>                  
                </section>
            </main>
        </Layout>
    )
}

export default ContactPage;