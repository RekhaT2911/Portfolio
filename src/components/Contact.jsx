import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, Github, Linkedin,
  Download, MessageCircle, User, Building,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzy1AT29xKZj7-K8g3jyW9vWA6nACHnvJm1GnKAiI6Bz3G6Js5dfSdblmW5BQEi3ErN/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Failed to send message. Try again.');
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tatikonda_Kyathi_Rekha_Resume.pdf';
    link.download = 'Tatikonda_Kyathi_Rekha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'kyathirekha2004@gmail.com',
      link: 'mailto:kyathirekha2004@gmail.com',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9491609192',
      link: 'tel:+919491609192',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Available for Remote/Relocation',
      link: '#',
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/RekhaT2911',
      label: 'GitHub',
      color: 'hover:text-primary-600 hover:bg-primary-50',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/kyathi-tatikonda',
      label: 'LinkedIn',
      color: 'hover:text-accent-600 hover:bg-accent-50',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-secondary-50 via-white to-accent-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-secondary-800 mb-4">
              Let's <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-secondary-600 text-lg max-w-3xl mx-auto">
              Ready to contribute to innovative projects and bring fresh AI perspectives to your team.
              Let's discuss how I can help achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-secondary-100">
                <div className="flex items-center mb-4">
                  <Building className="text-primary-600 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold font-display text-secondary-800">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                      Ready for New Opportunities
                    </span>
                  </h3>
                </div>
                <p className="text-secondary-600 leading-relaxed text-base">
                  I'm actively seeking internship and full-time opportunities in AI/ML or full-stack development.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a key={index} href={info.link} className={`group flex items-center p-4 ${info.bgColor} border-2 ${info.borderColor} rounded-2xl hover:border-primary-400 hover:scale-105 transition`}>
                    <div className={`p-3 bg-gradient-to-r ${info.color} rounded-2xl mr-4`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-secondary-800 font-semibold">{info.title}</h4>
                      <p className="text-secondary-600">{info.content}</p>
                    </div>
                  </a>
                );
              })}

              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-secondary-100">
                <h4 className="text-secondary-800 font-semibold text-lg mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-secondary-50 border-2 border-secondary-200 rounded-2xl text-secondary-600 ${social.color} transition hover:scale-110`}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                  <button
                    onClick={downloadResume}
                    className="p-3 bg-secondary-50 border-2 border-secondary-200 rounded-2xl text-secondary-600 hover:text-warning-600 hover:bg-warning-50 transition hover:scale-110"
                    aria-label="Download Resume"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-secondary-100 hover:border-primary-200 transition">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-primary-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-secondary-800">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} name="submit-to-google-sheet" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Internship / Job Opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-primary-500 hover:to-accent-500 transition hover:scale-105"
                >
                  Send Message
                  <Send size={18} />
                </button>
                {status && (
                  <p className="text-center text-sm font-medium mt-3 text-green-600">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
