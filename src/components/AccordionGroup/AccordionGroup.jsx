import './AccordionGroup.scss'
import classNames from "classnames";

const AccordionGroup = (props) => {
  const {
    /**
     * '' (default) | 'dark'
     */
    mode = '',
    columns = 1,
    children,
    idOrderedList = true,
  } = props

  const itemsPerColumn = Math.ceil(children.length / columns )

  const ListTag = idOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={classNames('accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': idOrderedList,
        [`accordion-group--${mode}`]: mode,
      })}
    >
      {children.map((child, index) => (
        <li
          className={classNames('accordion-group__item', {
            'accordion-group__item--last-column-item': columns > 1 && itemsPerColumn / (index + 1) === 1
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup