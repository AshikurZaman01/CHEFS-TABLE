const Banner = () => {
    return (
        <div>
            <div className="relative bg-blue-300 h-[70vh] bg-[url('https://media.istockphoto.com/id/2045389960/photo/chef-decorating-a-plate.webp?b=1&s=170667a&w=0&k=20&c=jnsXzeU5l7hSydcc0FIPIaR_tsSRQnN5vr_ocp6cMa4=')] bg-cover bg-center bg-no-repeat">

                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

                        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quia fugiat sit. Excepturi deleniti magni culpa quia laudantium, sapiente repudiandae.</p>

                        <div className="flex flex-row justify-center items-start gap-3 ">
                            <button className="btn btn-md capitalize rounded-full text-center bg-green-500 border-none text-black font-semibold">Explore Now</button>
                            <button className="btn btn-md capitalize rounded-full text-center bg-transparent border border-white text-white font-semibold">Our Feedback</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
