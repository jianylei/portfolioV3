import classNames from 'classnames'

type Props = {
  itemsLength: number
  selectedIndex: number
  onClick(index: number): void
}
const CarouselDots = ({ itemsLength, selectedIndex, onClick }: Props) => {
  const arr = new Array(itemsLength).fill(0)
  return (
    <div className="my-2 flex -translate-y-5 justify-center gap-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex
        return (
          <div
            className={classNames({
              'h-2 w-2 cursor-pointer rounded-full bg-slate-600 transition-all duration-300 dark:bg-gray-default':
                true,
              'opacity-50': !selected
            })}
            key={index}
            onClick={() => onClick(index)}></div>
        )
      })}
    </div>
  )
}
export default CarouselDots
