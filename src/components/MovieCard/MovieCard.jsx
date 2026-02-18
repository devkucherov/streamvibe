import './MovieCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLable="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {rating && (
          <Badge
            className="movie-card__released-bage"
          >
            <RatingView
              {...rating}
            />
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLable="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}

        {released && (
          <Badge
            className="movie-card__released-bage"
          >
            Released at <time className="movie-card__released-bage-label" dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard