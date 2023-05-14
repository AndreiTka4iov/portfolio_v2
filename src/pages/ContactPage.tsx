import ContactForm from "../components/form/ContactForm.jsx";

const ContactPage = () => {
    return ( 
        <div 
        id="contacts"
        className=" 
            text-center
            overflow-hidden
            w-11/12
            min-h-screen
            m-auto
            relative
            pt-16
            pb-9
            lg:w-2/4
            lg:w-2/4">
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