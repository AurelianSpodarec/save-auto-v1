import Input from "atoms/Input/Input";

function OGImagePreview() {
    return (
        <div className="block bg-white border border-gray-300 rounded-xl overflow-hidden" new-tab="true">
            <div className="aspect-w-12 aspect-h-7 min-h-[350px] relative">
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <img alt="Generated OG image" loading="lazy" src="https://uploads-ssl.webflow.com/6040ba28127600ad9182e1be/636ba0f73a0f25f20a02f17c_screenstudio-p-800.jpg" className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50 opacity-100"/> 
            </div>
            </div> 
            <div className="p-4 border-t border-gray-300">
                <p className="text-sm">This is your title</p>
                <p className="text-sm text-gray-500 mt-1">And this is your secondary text</p>
            </div>
        </div>
    )
}

function SiteSEOImage() {
    return (
        <div>
            <div className="grid grid-cols-12">

                <div className="col-span-6">
                    <Input label="Open Graph Title" />
                    <Input label="Open Graph Description" />
                </div>

                <div className="col-span-6">
                    <h4>OG Image Preview</h4>
                    <OGImagePreview />
                </div>
            </div>
            
        </div>
    )
}

export default SiteSEOImage;
