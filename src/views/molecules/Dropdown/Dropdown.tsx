// DOCUMENTATION: https://www.radix-ui.com/docs/primitives/components/dropdown-menu
import { ReactNode } from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';

export function DropdownWrap({ children }:DropdownWrapProps) {
    return (
        <RadixDropdown.Root>
            {children}
        </RadixDropdown.Root>
    )
}

export function DropdownTrigger({ children, className, props }:DropdownTriggerProps) {
    return (
        <RadixDropdown.Trigger {...props} className={className}>
            {children}
        </RadixDropdown.Trigger>
    )
}

export function DropdownPortal({ children, className }:DropdownPortalProps) {
    return (
        <RadixDropdown.Portal className={className}>
            {children}
        </RadixDropdown.Portal>
    )
}

export function DropdownContent({ children, className }:DropdownContentlProps) {
    return (
        <RadixDropdown.Content className={`${className} rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.1)] bg-white`}>
            {children}
        </RadixDropdown.Content>
    )
}

// TODO: Think of a way to make the padding dynamic; Issue is if you have a link, and padding is not on the link, the hitbox will be smaller
export function DropdownItem({ children, onClick, className }:DropdownItemProps) {
    return (
        <RadixDropdown.Item onClick={onClick} className={`${className} p-4 `}>
            {children}
        </RadixDropdown.Item>
    )
}

interface DropdownWrapProps {
    children: ReactNode;
}

interface DropdownTriggerProps extends RadixDropdown.DropdownMenuTriggerProps {
    children: ReactNode;
    className?: string;
    props?: any; //TODO: Fix this later
}

interface DropdownPortalProps {
    children: ReactNode;
    className?: string;
}

interface DropdownContentlProps {
    children: ReactNode;
    className?: string;
}

interface DropdownItemProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}
