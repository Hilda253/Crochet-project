function Stats () {
    return (
        <div className="grid grid-cols-1 p-8  rounded-4xl bg-amber-200 divide-y divide-black md:divide-y-0 md:divide-x md:divide-black md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center py-4">
                  <h3 className="text-3xl font-bold">5+</h3>
          <p className="mt-2 text-xl sm:text-base mb-1">Years Crocheting</p>
        </div>
        
        <div className="flex flex-col items-center py-4">
          <h3 className="text-3xl font-bold">120+</h3>
          <p className="mt-2 text-xl sm:text-base">Handmade Pieces</p>
        </div>
        
        <div className="flex flex-col items-center py-4">
          <h3 className="text-3xl font-bold">30+</h3>
          <p className="mt-2 text-xl sm:text-base">Patterns Designed</p>
        </div>
        <div className="flex flex-col items-center py-4">
          <h3 className="text-3xl font-bold">98%</h3>
          <p className="mt-2 text-xl sm:text-base">Client Satisfaction</p>
        </div>
        </div>


    );
}
export default Stats;