import React, { ReactElement } from 'react'

interface Props {
    name: string
}

export default function About({name="default"}: Props) {
    return (
        <div>
            {name}
        </div>
    )
}
