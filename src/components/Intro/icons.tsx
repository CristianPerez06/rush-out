import {
  Car,
  Bike,
  Bus,
  Calendar,
  MapPin,
  Bell,
  RefreshCw,
  Ticket,
  Map,
  Clock,
  BadgePercent,
  User,
} from 'lucide-react'

interface IconProps {
  className?: string
}

export const CarIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Car className={className} strokeWidth={1.5} />
)

export const BikeIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Bike className={className} strokeWidth={1.5} />
)

export const BusIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Bus className={className} strokeWidth={1.5} />
)

export const WalkingIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <User className={className} strokeWidth={1.5} />
)

export const CalendarIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Calendar className={className} strokeWidth={1.5} />
)

export const LocationPinIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <MapPin className={className} strokeWidth={1.5} />
)

export const ReminderIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Bell className={className} strokeWidth={1.5} />
)

export const SyncIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <RefreshCw className={className} strokeWidth={1.5} />
)

export const TicketIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Ticket className={className} strokeWidth={1.5} />
)

export const MapAreaIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Map className={className} strokeWidth={1.5} />
)

export const ClockIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <Clock className={className} strokeWidth={1.5} />
)

export const DealIcon = ({ className = 'h-6 w-6' }: IconProps) => (
  <BadgePercent className={className} strokeWidth={1.5} />
)
