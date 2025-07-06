import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { TitleBar } from "@shopify/app-bridge-react";
import { Card, Layout, Page } from "@shopify/polaris";
import { useState } from "react";
import { DateRange, getDefaultClassNames } from "react-day-picker";

export default function TimelinPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 65 * 24 * 60 * 60 * 1000),
  });
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
              numberOfMonths={3}
              className={cn(
                // Base calendar styling
                "w-full",

                // Higher specificity for range styling
                "[&.rdp_.rdp-day_range_start]:bg-blue-600 [&.rdp_.rdp-day_range_start]:text-white",
                "[&.rdp_.rdp-day_range_start]:border-blue-700 [&.rdp_.rdp-day_range_start]:font-bold",
                "[&.rdp_.rdp-day_range_start]:dark:border-blue-500",

                "[&.rdp_.rdp-day_range_end]:bg-blue-600 [&.rdp_.rdp-day_range_end]:text-white",
                "[&.rdp_.rdp-day_range_end]:border-blue-700 [&.rdp_.rdp-day_range_end]:font-bold",
                "[&.rdp_.rdp-day_range_end]:dark:border-blue-500",

                "[&.rdp_.rdp-day_range_middle]:bg-blue-100 [&.rdp_.rdp-day_range_middle]:dark:bg-blue-900",
                "[&.rdp_.rdp-day_range_middle]:text-blue-900 [&.rdp_.rdp-day_range_middle]:dark:text-blue-100",
              )}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
