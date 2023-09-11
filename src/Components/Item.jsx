/* eslint-disable react/prop-types */
const Item = ({ data }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };
    const [contributedByName] = data.contributed_by.split('<').map(item => item.trim());

    return (
        <div className="flex card card-compact w-3/4 md:w-96 h-[400px] bg-orange-500 shadow-xl text-white">
            <figure><img className="object-fill h-full mt-10" src={data.image_url} alt="Shoes" /></figure>
            <div className="card-body mt-5">
                <h2 className="card-title">{data.name}</h2>
                <div className='text-md font-medium'>
                    <p> Contributed: {truncateText(contributedByName, 30)}</p>
                    <p>First Brewed: {data.first_brewed}</p>
                    <p>Ph Level: {data.ph}</p>
                    <p>Tagline : {data.tagline}</p>
                    <p>Volume : {data.volume.value} Litres</p>
                </div>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>

    )
}
export default Item;



