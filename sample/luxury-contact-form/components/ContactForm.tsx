import React, { useState } from 'react';

// Custom SVG Button Component based on the user's provided SVG code
const SubmitButtonSVG = () => (
  <svg
    width="148"
    height="43"
    viewBox="0 0 148 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect width="148" height="43" rx="2" fill="#EFD3D7"></rect>
    {/* The paths below draw the word "Submit" and the arrow */}
    <path
      d="M38.556 24.428L39.606 23.588C40.236 24.792 41.37 25.492 42.672 25.492C43.974 25.492 44.982 24.848 44.982 23.7C44.982 22.482 43.82 22.272 42.294 21.908C40.712 21.53 39.144 21.096 39.144 19.206C39.144 17.442 40.67 16.294 42.574 16.294C44.324 16.294 45.584 17.134 46.186 18.268L45.164 19.08C44.646 18.114 43.848 17.456 42.546 17.456C41.328 17.456 40.446 18.128 40.446 19.094C40.446 20.158 41.384 20.382 42.798 20.718C44.464 21.11 46.298 21.46 46.298 23.588C46.298 25.464 44.632 26.654 42.644 26.654C40.908 26.654 39.242 25.786 38.556 24.428ZM53.2968 19.178V26.5H52.0368V25.492C51.6168 26.108 50.9028 26.654 49.8668 26.654C48.2988 26.654 47.4168 25.576 47.4168 24.022V19.178H48.6768V23.756C48.6768 24.792 49.1248 25.492 50.2028 25.492C51.1128 25.492 52.0368 24.806 52.0368 23.588V19.178H53.2968ZM58.6371 26.654C57.6151 26.654 56.8031 26.164 56.3691 25.436V26.5H55.1091V16.448H56.3691V20.242C56.8031 19.528 57.6151 19.038 58.6371 19.038C60.6671 19.038 61.8291 20.76 61.8291 22.846C61.8291 24.918 60.6671 26.654 58.6371 26.654ZM56.3411 22.594V23.112C56.3411 24.792 57.3771 25.548 58.4131 25.548C59.7851 25.548 60.5551 24.414 60.5551 22.846C60.5551 21.264 59.7851 20.144 58.4131 20.144C57.3771 20.144 56.3411 20.886 56.3411 22.594ZM64.4016 22.118V26.5H63.1416V19.178H64.4016V20.172C64.7936 19.57 65.4936 19.038 66.5156 19.038C67.4956 19.038 68.1816 19.528 68.5456 20.284C68.9516 19.682 69.7356 19.038 70.8836 19.038C72.3956 19.038 73.3056 20.116 73.3056 21.67V26.5H72.0456V22.006C72.0456 20.984 71.6256 20.214 70.5896 20.214C69.7496 20.214 68.8536 20.928 68.8536 22.118V26.5H67.5936V22.006C67.5936 20.984 67.1736 20.214 66.1376 20.214C65.2976 20.214 64.4016 20.928 64.4016 22.118ZM75.001 17.904V16.448H76.373V17.904H75.001ZM76.317 19.178V26.5H75.057V19.178H76.317ZM78.3362 24.75V20.256H77.2022V19.178H78.3362V17.036H79.5822V19.178H81.2482V20.256H79.5822V24.554C79.5822 25.324 79.9602 25.464 80.6042 25.464C80.8982 25.464 81.1082 25.45 81.4022 25.38V26.458C81.0802 26.528 80.7162 26.57 80.2962 26.57C79.0502 26.57 78.3362 26.15 78.3362 24.75Z"
      fill="#342C27"
    ></path>
    <path
      d="M93.2139 22.3125H107.379M107.379 22.3125L103.562 18.375M107.379 22.3125L103.562 26.25"
      stroke="#342C27"
      strokeLinecap="square"
    ></path>
  </svg>
);

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      // Reset success message after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="section_home-v1-form bg-[#342C27] text-[#EFD3D7] w-full">
      <div className="padding-global px-6 py-20 md:py-32 lg:px-12 xl:px-24 mx-auto max-w-[1440px]">
        <div className="home-v1-form_component grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Typography */}
          <div className="home-v1-form_left flex flex-col justify-between h-full space-y-12">
            <h3 className="home-v1-values_header text-6xl md:text-7xl lg:text-8xl font-serif-custom italic leading-[1.1] tracking-tight">
              {/* Animated Text Lines */}
              <div className="overflow-hidden">
                <div className="animate-reveal [animation-delay:0ms]">
                  An exquisite
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-reveal [animation-delay:150ms]">
                  space, made
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-reveal [animation-delay:300ms]">
                  together.
                </div>
              </div>
            </h3>

            <div className="home-v1-form_left-content max-w-md">
              <div className="home-v1-form_item-text font-sans-custom text-white/70 text-lg md:text-xl font-light leading-relaxed">
                <div className="overflow-hidden">
                  <div className="animate-reveal [animation-delay:500ms]">
                    If you have any questions, need more information, or want
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="animate-reveal [animation-delay:600ms]">
                    to speak with our design experts.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="home-v1-form_right w-full">
            <div className="home-v1-form_form-block-copy w-full relative">
              
              {!isSuccess ? (
                <form
                  id="email-form"
                  name="email-form"
                  onSubmit={handleSubmit}
                  className="home-v1-form_form flex flex-col gap-8 animate-reveal [animation-delay:700ms] opacity-0"
                  aria-label="Email Form"
                >
                  <div className="group relative">
                    <input
                      className="home-v1-form_form-field w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#EFD3D7] transition-all duration-300 ease-out font-sans-custom text-base"
                      maxLength={256}
                      name="name"
                      placeholder="Full Name"
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="group relative">
                    <input
                      className="home-v1-form_form-field w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#EFD3D7] transition-all duration-300 ease-out font-sans-custom text-base"
                      maxLength={256}
                      name="email"
                      placeholder="Email"
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="group relative">
                    <input
                      className="home-v1-form_form-field w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#EFD3D7] transition-all duration-300 ease-out font-sans-custom text-base"
                      maxLength={256}
                      name="phone"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="group relative">
                    <textarea
                      id="message"
                      name="message"
                      maxLength={5000}
                      placeholder="Message"
                      required
                      rows={1}
                      value={formState.message}
                      onChange={handleChange}
                      className="home-v1-form_form-field text-area w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#EFD3D7] transition-all duration-300 ease-out font-sans-custom text-base min-h-[60px] resize-none"
                    ></textarea>
                    {/* Decorative slanted lines often seen in textareas in design drafts */}
                    <div className="absolute bottom-2 right-0 pointer-events-none opacity-50">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" className="text-white/20">
                         <line x1="10" y1="10" x2="0" y2="0" />
                         <line x1="10" y1="5" x2="5" y2="0" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="home-v1-form_submit relative block w-[148px] h-[43px] transition-transform active:scale-95 disabled:opacity-70 hover:opacity-90 cursor-pointer"
                    >
                      <div className="home-v1-form_submit-embed w-full h-full">
                         <SubmitButtonSVG />
                      </div>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="w-form-done bg-[#EFD3D7] text-[#342C27] p-8 rounded shadow-lg animate-reveal">
                  <div className="text-xl font-serif-custom italic font-bold mb-2">Thank you!</div>
                  <div className="font-sans-custom">Your submission has been received! We will be in touch shortly.</div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm border-b border-[#342C27] pb-1 hover:opacity-70"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};