

const RightSideBar = () => {
  return (
    <div className="sticky top-0 right-0 z-20 w-[300px] xl:w-[350px] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h4 className="font-medium  text-light-1 text-lg">Following</h4>
        <div className="flex flex-col gap-4">Maping User's</div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-medium  text-light-1 text-lg">Suggested people</h4>
        <div className="flex flex-col gap-4">Maping User's</div>
      </div>
    </div>
  )
}

export default RightSideBar
