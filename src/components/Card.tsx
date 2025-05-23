import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

interface CardProps {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div
      className={css({
        borderRadius: 'lg',
        boxShadow: 'md',
        p: '4',
        bg: 'white',
        border: '1px solid',
        borderColor: 'gray.200',
      })}
    >
      <div className={flex({ direction: 'column', gap: '2' })}>
        <h2 className={css({ fontSize: 'xl', fontWeight: 'semibold' })}>
          {title}
        </h2>
        <p className={css({ color: 'gray.600' })}>{description}</p>
      </div>
    </div>
  )
}