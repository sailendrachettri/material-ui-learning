import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from '@mui/lab'

export const MuiTimeline = () => {
    return (

        <Timeline position='alternate-reverse'>
            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>09:40am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>City A</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>10:34am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>City B</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color='text.secondary'>11:00am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined' />
                </TimelineSeparator>
                <TimelineContent>City C</TimelineContent>
            </TimelineItem>
        </Timeline>

    )
}
