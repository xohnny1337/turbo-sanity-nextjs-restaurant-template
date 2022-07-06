import { GetStaticProps } from "next";

import { getClient } from "../lib/sanity/sanity.server";
import { settingsQuery } from "../lib/sanity/queries";
import { daySanityMapper } from "../utils/time";
import clsx from "clsx";

export default function Index({ data }: any) {
  const openingHours = data?.settings?.openings;
  const phoneNumber = data?.settings?.phone;
  const email = data?.settings?.email;
  const address = data?.settings?.address;

  return (
    <div className="space-y-6 md:space-y-12">
      <section>
        <h1 className="mb-4">Kontakt informasjon</h1>
        <h3>Ring for bestilling: {phoneNumber}</h3>
        <h3>Adresse: {address}</h3>
        <h3>E-postadresse: {email}</h3>
      </section>
      <section>
        <h1 className="mb-4">Åpningstider</h1>
        <div className="space-y-4 relative">
          {openingHours.map((day) => {
            return (
              <div
                key={day._key}
                className={clsx("grid grid-cols-4 md:grid-cols-12")}
              >
                <h3 className="col-span-2">{daySanityMapper[day.day]}:</h3>
                <h3 className="col-span-2">
                  {day.open ? (
                    <>
                      {day.openTime} - {day.closeTime}
                    </>
                  ) : (
                    "stengt"
                  )}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient().fetch(`{ ${settingsQuery} }`);

  return {
    props: { data },
  };
};
