import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem,AccordionTrigger } from "@/components/ui/accordion";

export default function AdditionalPage() {
  return (
    <>
      <Page>
        <TitleBar title="Additional page" />
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="300">
                <Text as="p" variant="bodyMd">
                  The app template comes with an additional page which
                  demonstrates how to create multiple pages within app
                  navigation using{" "}
                  <Link
                    url="https://shopify.dev/docs/apps/tools/app-bridge"
                    target="_blank"
                    removeUnderline
                  >
                    App Bridge
                  </Link>
                  <h1 className="text-3xl">hiiiiii</h1>.
                </Text>
                <Text as="p" variant="bodyMd">
                  To create your own page and have it show up in the app
                  navigation, add a page inside <Code>app/routes</Code>, and a
                  link to it in the <Code>&lt;NavMenu&gt;</Code> component found
                  in <Code>app/routes/app.jsx</Code>.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Resources
                </Text>
                <List>
                  <List.Item>
                    <Link
                      url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                      target="_blank"
                      removeUnderline
                    >
                      App nav best practices
                    </Link>
                  </List.Item>
                </List>
              </BlockStack>
            </Card>
            <Sheet>
              <SheetTrigger><Button className="m-2">Open Drawer</Button></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Layout.Section>
        </Layout>
      </Page>
      <Accordion
      type="single"
      collapsible
      className=" m-10 bg-gray-50 "
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="px-2">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="px-2">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
