import { Calendar } from "@/components/ui/calendar";
import { TitleBar } from "@shopify/app-bridge-react";
import { Card, Layout, Page } from "@shopify/polaris";
import { useState } from "react";
import { DateRange, getDefaultClassNames } from "react-day-picker";

export default function TimelinPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });
  const defaultClassNames = getDefaultClassNames();
  return (
    <Page>
      <TitleBar title="Timeline page" />
      <Layout>
        <Layout.Section>
          <Card>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              defaultMonth={dateRange?.from}
              numberOfMonths={2}
              classNames={{
                today: `border-amber-500`, // Add a border to today's date
                selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
                root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
                chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
