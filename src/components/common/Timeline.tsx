
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ol ref={ref} className={cn('relative border-l border-border/50', className)} {...props}>
        {children}
      </ol>
    );
  },
);
Timeline.displayName = 'Timeline';


interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    icon: LucideIcon;
    title: string;
    era: string;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ children, icon: Icon, title, era, className, ...props }, ref) => {
    return (
      <li ref={ref} className="mb-10 ml-6 timeline-item" {...props}>
         <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-8 ring-background">
            <Icon className="h-5 w-5 text-secondary-foreground" />
        </span>
        <div className="p-6 bg-card/50 border border-border/50 rounded-lg shadow-sm">
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-2xl font-headline font-semibold text-primary">{title}</h3>
                <span className="text-sm font-medium text-accent">{era}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                 {children}
            </div>
        </div>
      </li>
    );
  },
);
TimelineItem.displayName = 'TimelineItem';

export { Timeline, TimelineItem };
