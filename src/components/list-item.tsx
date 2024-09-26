import { ReactNode } from "react";

export type ListItemProps<TItem> = {
  items: TItem[];
  children: (item: TItem) => ReactNode;
};

export type CompactListItemProps<
  TItem extends { product_id: number | string }
> = {
  items: TItem[];
  Component: (props: { item: TItem }) => ReactNode;
};

export function ListItem<TItem extends { product_id: number | string }>(
  props: CompactListItemProps<TItem>
): ReactNode;

export function ListItem<TItem>({
  items,
  children,
}: ListItemProps<TItem>): ReactNode;

export function ListItem<
  TItem,
  TItemID extends { product_id: number | string }
>(props: ListItemProps<TItem> | CompactListItemProps<TItemID>) {
  if ("children" in props) {
    return props.items.map((item) => props.children(item));
  }

  const { items, Component } = props;

  return items.map((item) => <Component key={item.product_id} item={item} />);
}
