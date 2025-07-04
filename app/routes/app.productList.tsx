import { TitleBar } from "@shopify/app-bridge-react";
import { Card, Layout, Page } from "@shopify/polaris";
import { useCallback, useState } from "react";
import {
  Form,
  FormLayout,
  Checkbox,
  TextField,
  Button,
} from "@shopify/polaris";
import { ActionFunctionArgs } from "@remix-run/node";


export const action=async({ request }: ActionFunctionArgs)=>{
   
}

export default function ProductListPage() {
  const [newsletter, setNewsletter] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(() => {
    setEmail("");
    setNewsletter(false);
  }, []);

  const handleNewsLetterChange = useCallback(
    (value: boolean) => setNewsletter(value),
    [],
  );

  const handleEmailChange = useCallback((value: string) => setEmail(value), []);
  return (
    <Page>
      <TitleBar title="Timeline page" />
      <Layout>
        <Layout.Section>
          <Card>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <Checkbox
                  label="Sign up for the Polaris newsletter"
                  checked={newsletter}
                  onChange={handleNewsLetterChange}
                />

                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  label="Email"
                  type="email"
                  autoComplete="email"
                  helpText={
                    <span>
                      We’ll use this email address to inform you on future
                      changes to Polaris.
                    </span>
                  }
                />

                <Button submit>Submit</Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
