export default function TechStack() {

    const stylespan = "bg-blue-500/20 border border-white/10 rounded-sm"


    return (
        <section className="bg-black h-full text-white">
            <div className="flex items-center justify-evenly h-full w-full gap-2">
                <div className="flex flex-col items-center justify-evenly">
                    <h2 className="text-3xl font-bold mt-5 text-balance">las tecnologías que uso en mi dia a dia</h2>
                    <p className="text-balance">para construir proyectos increíbles</p>
                </div>

                <div className="grid grid-cols-2 grid-rows-auto place-items-center gap-2">
                    {/* TODO: volverlo un componente que reciba props mas especificamente un array de objetos */}
                    {/* Tecnologias que manejos */}
                    <div className="px-10 py-20 bg-radial from-cyan-950 from-45% to-black/90 border rounded-lg">
                        <p className="mb-10 text-2xl font-bold">tecnologias que manejos</p>
                        <img src="" alt="" />
                        <div className="flex items-center justify-center gap-2">
                            <span className={stylespan}>React</span>
                            <span className={stylespan}>Nextjs</span>
                            <span className={stylespan}>Nodejs</span>
                            <span className={stylespan}>Tailwind</span>
                            <span className={stylespan}>Astro</span>
                        </div>
                    </div>

                    {/* Tecnologias que blandas */}
                    <div className="">
                        <p>tecnologias que blandas</p>
                        <img src="" alt="" />
                        <div className="flex items-center justify-center">
                            <span className={stylespan}>React</span>
                            <span className={stylespan}>Nextjs</span>
                            <span className={stylespan}>Nodejs</span>
                            <span className={stylespan}>Tailwind</span>
                            <span className={stylespan}>Astro</span>
                        </div>
                    </div>

                    {/* Tecnologias que quiero aprender */}
                    <div className="col-span-2 bg-red-300 w-full flex flex-col items-center justify-center">
                        <p>tecnologias que quiero aprender</p>
                        <div className="flex items-center justify-center">
                            <span className={stylespan}>Rust</span>
                            <span className={stylespan}>C++</span>
                            <span className={stylespan}>C#</span>
                            <span className={stylespan}>Python</span>
                            <span className={stylespan}>Java</span>
                        </div>
                    </div>
                </div>  
            </div>  
        </section>
    )
}