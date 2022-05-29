import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const cities = [
  { id: 0, name: "Seçiniz" },
  { id: 1, name: "Adana" },
  { id: 2, name: "Adıyaman" },
  { id: 3, name: "Afyonkarahisar" },
  { id: 4, name: "Ağrı" },
  { id: 5, name: "Amasya" },
  { id: 6, name: "Ankara" },
  { id: 7, name: "Antalya" },
  { id: 8, name: "Artvin" },
  { id: 9, name: "Aydın" },
  { id: 10, name: "Balıkesir" },
  { id: 11, name: "Bilecik" },
  { id: 12, name: "Bingöl" },
  { id: 13, name: "Bitlis" },
  { id: 14, name: "Bolu" },
  { id: 15, name: "Burdur" },
  { id: 16, name: "Bursa" },
  { id: 17, name: "Çanakkale" },
  { id: 18, name: "Çankırı" },
  { id: 19, name: "Çorum" },
  { id: 20, name: "Denizli" },
  { id: 21, name: "Diyarbakır" },
  { id: 22, name: "Edirne" },
  { id: 23, name: "Elazığ" },
  { id: 24, name: "Erzincan" },
  { id: 25, name: "Erzurum" },
  { id: 26, name: "Eskişehir" },
  { id: 27, name: "Gaziantep" },
  { id: 28, name: "Giresun" },
  { id: 29, name: "Gümüşhane" },
  { id: 30, name: "Hakkari" },
  { id: 31, name: "Hatay" },
  { id: 32, name: "Isparta" },
  { id: 33, name: "Mersin" },
  { id: 34, name: "İstanbul" },
  { id: 35, name: "İzmir" },
  { id: 36, name: "Kars" },
  { id: 37, name: "Kastamonu" },
  { id: 38, name: "Kayseri" },
  { id: 39, name: "Kırklareli" },
  { id: 40, name: "Kırşehir" },
  { id: 41, name: "Kocaeli" },
  { id: 42, name: "Konya" },
  { id: 43, name: "Kütahya" },
  { id: 44, name: "Malatya" },
  { id: 45, name: "Manisa" },
  { id: 46, name: "Kahramanmaraş" },
  { id: 47, name: "Mardin" },
  { id: 48, name: "Muğla" },
  { id: 49, name: "Muş" },
  { id: 50, name: "Nevşehir" },
  { id: 51, name: "Niğde" },
  { id: 52, name: "Ordu" },
  { id: 53, name: "Rize" },
  { id: 54, name: "Sakarya" },
  { id: 55, name: "Samsun" },
  { id: 56, name: "Siirt" },
  { id: 57, name: "Sinop" },
  { id: 58, name: "Sivas" },
  { id: 59, name: "Tekirdağ" },
  { id: 60, name: "Tokat" },
  { id: 61, name: "Trabzon" },
  { id: 62, name: "Tunceli" },
  { id: 63, name: "Şanlıurfa" },
  { id: 64, name: "Uşak" },
  { id: 65, name: "Van" },
  { id: 66, name: "Yozgat" },
  { id: 67, name: "Zonguldak" },
  { id: 68, name: "Aksaray" },
  { id: 69, name: "Bayburt" },
  { id: 70, name: "Karaman" },
  { id: 71, name: "Kırıkkale" },
  { id: 72, name: "Batman" },
  { id: 73, name: "Şırnak" },
  { id: 74, name: "Bartın" },
  { id: 75, name: "Ardahan" },
  { id: 76, name: "Iğdır" },
  { id: 77, name: "Yalova" },
  { id: 78, name: "Karabük" },
  { id: 79, name: "Kilis" },
  { id: 80, name: "Osmaniye" },
  { id: 81, name: "Düzce" },
];

const district = [
  { id: 0, name: "Seciniz" },
  { id: 100, name: "Ilce" },
];

const AddCustomer = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(district[0]);

  return (
    <div className="bg-gray-200 w-full p-4 mb:p-8">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl font-bold text-slate-700">Müşteri Oluştur</h1>
          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-center md:justify-end gap-2 order-1 md:order-2 mb-4 md:mb-0">
          <button
            type="submit"
            className="text-red-400 bg-red-100 px-4 py-1 rounded-md border border-solid border-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Vazgeç
          </button>
          <button
            type="submit"
            className="text-green-400 bg-green-100 px-4 py-1 rounded-md border border-solid border-green-500 hover:bg-green-500 hover:text-white transition-colors"
          >
            Kaydet
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 mt-8">
        <div className="w-full md:w-4/5">
          <div className="bg-white rounded-md w-full p-4">
            <h2 className="mb-5 font-semibold">Genel Bilgiler</h2>
            <form action="#" method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Adı
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all mb-4"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Soyadı
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all mb-4"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Eposta
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all mb-4"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all mb-4"
                  required
                ></input>
              </div>
            </form>
          </div>
          <div className="bg-white rounded-md w-full mt-8 p-4">
            <h2 className="mb-5 font-semibold">Detay Bilgiler</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Adı
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Soyadı
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Ülke / Bölge
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  İl
                </label>
                <div>
                  <Listbox value={selectedCity} onChange={setSelectedCity}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default bg-white rounded-lg border leading-5 hover:border-border-color outline-1 outline-border-color py-4 pl-3 pr-10 text-left sm:text-sm">
                        <span className="block truncate">
                          {selectedCity.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg z-20 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {cities.map((city, cityIdx) => (
                            <Listbox.Option
                              key={cityIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={city}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {city.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  İlçe
                </label>
                <div>
                  <Listbox
                    value={selectedDistrict}
                    onChange={setSelectedDistrict}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg border leading-5 bg-white hover:border-border-color outline-1 outline-border-color py-4 pl-3 pr-10 text-left sm:text-sm">
                        <span className="block truncate">
                          {selectedDistrict.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {district.map((district, districtIdx) => (
                            <Listbox.Option
                              key={districtIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={district}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {district.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Posta Kodu
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Adres
                </label>
                <textarea
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Adres Tarifi
                </label>
                <textarea
                  type="text"
                  className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all"
                  required
                ></textarea>
              </div>
            </form>
          </div>
          <div className="bg-white rounded-md w-full mt-8 p-4">
            <h2 className="mb-5 font-semibold">Fatura Bilgileri</h2>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <div className="bg-white rounded-md w-full p-4 mb-4">
            <h2 className="mb-5 font-semibold">Not</h2>
            <textarea
              type="text"
              className="block w-full rounded-md border leading-5 p-4 hover:border-border-color outline-1 outline-border-color transition-all mb-4"
              required
            ></textarea>
          </div>
          <div className="bg-white rounded-md w-full p-4 mb-4">
            <h2 className="font-semibold">Kullanıcı Etiketleri</h2>
            <span className="cursor-pointer mb-2 text-xs h-6 font-normal text-left leading-6 px-4 py-1 tracking-wide text-[#16417c] bg-[#f1f4f8] rounded">
              Yeni Etiket
            </span>
          </div>
          <div className="bg-white rounded-md w-full p-4">
            <h2 className="mb-5 font-semibold">Onaylar</h2>
            <div className="flex items-center justify-start gap-2 mb-4">
              <input type="checkbox"></input>
              <label className="text-sm font-medium text-gray-700">
                Vergiden Muaf
              </label>
            </div>
            <div className="flex items-center justify-start gap-2 mb-4">
              <input type="checkbox"></input>
              <label className="text-sm font-medium text-gray-700">
                E-Posta Aboneliği
              </label>
            </div>
            <div className="flex items-center justify-start gap-2 mb-4">
              <input type="checkbox"></input>
              <label className="text-sm font-medium text-gray-700">
                SMS Aboneliği
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center md:justify-end gap-4 mt-4">
        <button
          type="submit"
          className="text-red-400 bg-red-100 px-4 py-1 rounded-md border border-solid border-red-500 hover:bg-red-500 hover:text-white transition-colors"
        >
          Vazgeç
        </button>
        <button
          type="submit"
          className="text-green-400 bg-green-100 px-4 py-1 rounded-md border border-solid border-green-500 hover:bg-green-500 hover:text-white transition-colors"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
