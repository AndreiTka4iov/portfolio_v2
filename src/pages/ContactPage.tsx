import ContactForm from "../components/form/ContactForm.jsx";

const ContactPage = () => {
    return ( 
        <div 
        id="contacts"
        className=" 
            text-center
            overflow-hidden
            w-full
            min-h-screen
            relative
            pl-4
            pr-4
            pt-16
            pb-9
            lg:pl-32
            lg:pr-32">
            <h1 className="
                sm:text-6xl
                text-4xl  
                font-bold 
                leading-tight  
                text-gray-300
                ">Contact <span className="text-red-500">Me</span>
            </h1>
            <ContactForm/>
        </div>
     );
}
 
export default ContactPage;