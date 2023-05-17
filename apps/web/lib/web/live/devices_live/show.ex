defmodule Web.DevicesLive.Show do
  use Web, :live_view

  def render(assigns) do
    ~H"""
    <div class="grid grid-cols-1 p-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      <div class="col-span-full mb-4 xl:mb-2">
        <!-- Breadcrumbs -->
        <.breadcrumbs entries={[
          %{label: "Home", path: ~p"/"},
          %{label: "Devices", path: ~p"/devices"},
          %{label: "Jamil's Macbook Pro", path: ~p"/devices/DF43E951-7DFB-4921-8F7F-BF0F8D31FA89"}
        ]} />
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            Device details
          </h1>
          <.delete_button>
            Archive
          </.delete_button>
        </div>
      </div>
    </div>
    <!-- Device Details -->
    <div class="bg-white dark:bg-gray-800 overflow-hidden">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Identifier
            </th>
            <td class="px-6 py-4">
              BF0F8D31FA89
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              User
            </th>
            <td class="px-6 py-4">
              <.link
                navigate={~p"/users/55DDA8CB-69A7-48FC-9048-639021C205A2"}
                class="text-blue-600 hover:underline"
              >
                Andrew Dryga
              </.link>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              First seen
            </th>
            <td class="px-6 py-4">
              3 days ago in Bangalore, India
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Last seen
            </th>
            <td class="px-6 py-4">
              1 hour ago in San Francisco, CA
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Remote IPv4
            </th>
            <td class="px-6 py-4">
              <code>69.100.123.11</code>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Remote IPv6
            </th>
            <td class="px-6 py-4">
              <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Transfer
            </th>
            <td class="px-6 py-4">
              4.43 GB up, 1.23 GB down
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Client version
            </th>
            <td class="px-6 py-4">
              v1.01 for macOS/arm64
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              OS version
            </th>
            <td class="px-6 py-4">
              macOS 13.4.1
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Machine type
            </th>
            <td class="px-6 py-4">
              Macbook Pro
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    """
  end
end
